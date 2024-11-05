# File 1: text_processor.py
from sentence_transformers import SentenceTransformer
import numpy as np
from typing import List, Dict, Iterator
import torch
from tqdm import tqdm
from pathlib import Path


class BatchTextProcessor:
    def __init__(self, model_name: str = "all-MiniLM-L6-v2"):
        self.model = SentenceTransformer(model_name)
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model.to(self.device)

    def process_text_list(
        self,
        base_text: str,
        comparison_texts: List[str],
        threshold: float = 0.7,
        batch_size: int = 32,
    ) -> List[Dict]:
        """
        Process a list of comparison texts against base text.

        Args:
            base_text: The reference text to compare against
            comparison_texts: List of texts to compare
            threshold: Similarity threshold
            batch_size: Number of texts to process at once

        Returns:
            List[Dict]: List of results containing similarity scores and metadata
        """
        results = []
        base_embedding = self.model.encode(base_text, convert_to_tensor=True)

        # Process in batches
        for i in tqdm(range(0, len(comparison_texts), batch_size)):
            batch = comparison_texts[i : i + batch_size]

            # Get embeddings for batch
            batch_embeddings = self.model.encode(batch, convert_to_tensor=True)

            # Calculate similarities for batch
            similarities = torch.cosine_similarity(
                batch_embeddings, base_embedding.unsqueeze(0)
            )

            # Store results
            for j, similarity in enumerate(similarities):
                similarity_float = float(similarity)
                results.append(
                    {
                        "text_index": i + j,
                        "similarity": similarity_float,
                        "exceeds_threshold": similarity_float > threshold,
                        "text_length": len(batch[j]),
                        "text": batch[j],  # Including the actual text for reference
                    }
                )

        return results

    def process_directory(
        self,
        base_text: str,
        comparison_dir: str,
        threshold: float = 0.7,
        file_pattern: str = "*.txt",
    ) -> Iterator[Dict]:
        """
        Process all matching files in a directory against base text.

        Args:
            base_text: The reference text to compare against
            comparison_dir: Directory containing comparison files
            threshold: Similarity threshold
            file_pattern: Pattern to match files

        Yields:
            Dict: Results for each processed file
        """
        base_embedding = self.model.encode(base_text, convert_to_tensor=True)

        for file_path in tqdm(list(Path(comparison_dir).glob(file_pattern))):
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    comparison_text = f.read()

                comp_embedding = self.model.encode(
                    comparison_text, convert_to_tensor=True
                )
                similarity = float(
                    torch.cosine_similarity(base_embedding, comp_embedding, dim=0)
                )

                yield {
                    "file_name": file_path.name,
                    "file_path": str(file_path),
                    "similarity": similarity,
                    "exceeds_threshold": similarity > threshold,
                    "file_size": file_path.stat().st_size,
                    "text": comparison_text,
                }

            except Exception as e:
                yield {
                    "file_name": file_path.name,
                    "file_path": str(file_path),
                    "error": str(e),
                }


# File 2: your_script.py
from text_processor import BatchTextProcessor
import pandas as pd


def process_documents(base_text: str, docs_to_compare: List[str]) -> pd.DataFrame:
    """
    Process multiple documents and return results as a DataFrame.

    Args:
        base_text: Reference text to compare against
        docs_to_compare: List of documents to compare

    Returns:
        pd.DataFrame: Results with similarity scores and metadata
    """
    # Initialize processor
    processor = BatchTextProcessor()

    # Process the documents
    results = processor.process_text_list(
        base_text=base_text,
        comparison_texts=docs_to_compare,
        threshold=0.7,  # Adjust threshold as needed
        batch_size=32,  # Adjust batch size based on your memory
    )

    # Convert results to DataFrame for easier analysis
    df = pd.DataFrame(results)

    # Sort by similarity score
    df_sorted = df.sort_values("similarity", ascending=False)

    return df_sorted


def process_document_directory(base_text: str, directory_path: str) -> pd.DataFrame:
    """
    Process all documents in a directory and return results as a DataFrame.

    Args:
        base_text: Reference text to compare against
        directory_path: Path to directory containing documents

    Returns:
        pd.DataFrame: Results with similarity scores and metadata
    """
    processor = BatchTextProcessor()

    # Process all files in directory
    results = list(
        processor.process_directory(
            base_text=base_text,
            comparison_dir=directory_path,
            threshold=0.7,  # Adjust threshold as needed
            file_pattern="*.txt",  # Adjust pattern as needed
        )
    )

    # Convert to DataFrame
    df = pd.DataFrame(results)

    # Sort by similarity score
    df_sorted = df.sort_values("similarity", ascending=False)

    return df_sorted


# Example usage in your script:
if __name__ == "__main__":
    # Example with list of documents
    base_document = "Your reference text here..."
    documents_to_compare = [
        "First document to compare...",
        "Second document to compare...",
        # Add more documents as needed
    ]

    # Process list of documents
    results_df = process_documents(base_document, documents_to_compare)
    print("\nTop matches from document list:")
    print(results_df[["text_index", "similarity", "text_length"]].head())

    # Example with directory processing
    directory_results = process_document_directory(
        base_document, "path/to/your/documents"
    )
    print("\nTop matches from directory:")
    print(directory_results[["file_name", "similarity", "file_size"]].head())
