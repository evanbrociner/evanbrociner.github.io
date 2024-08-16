from bs4 import BeautifulSoup


def has_two_brackets(text):
    return text.count("[") == 1 and text.count("]") == 1


def update_references(html_file):
    """
    This function updates reference numbers in anchor tags of an HTML file by creating a reference dictionary from links and updating numbers within brackets.

    Args:
        html_file (str): Path to the HTML file.
    """
    # Parse the HTML file
    with open(html_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    # Find all anchor tags with references
    references = soup.find_all("a", href=True, text=True)

    print(references)

    reference_dict = {}
    reference_counter = 1  # Counter to assign unique reference numbers

    # Process each anchor tag
    for ref in references:
        link = ref["href"]
        text = ref.get_text(strip=True)
        if has_two_brackets(text):
            if link in reference_dict:
                number = reference_dict[link]
            else:
                reference_dict[link] = reference_counter
                reference_counter += 1
                number = reference_dict[link]

            new_text = f"{text.split('[')[0].strip()} [{number}]"
            ref.string.replace_with(new_text)
    # Write updated HTML to a new file
    output_file = f"{html_file}"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(str(soup))

    print(f"Updated HTML written to {output_file}")

    # Optionally, return the reference dictionary if needed
    return reference_dict


update_references(
    "/Users/evan.brociner/Desktop/evanbrociner.github.io/medicaid/health_care_costs.html"
)

print("Updated HTML written to your_html_file_updated.html")
