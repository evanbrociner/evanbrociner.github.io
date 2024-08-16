import os
from bs4 import BeautifulSoup


def sort_table_by_first_td(html_code):
    """
    Parses the HTML code, finds tables, and rearranges table rows (<tr>)
    based on the alphabetical order of the text content within the first <td>.

    Args:
        html_code (str): The HTML code to parse.

    Returns:
        str: The modified HTML code with sorted table rows.
    """

    soup = BeautifulSoup(html_code, "html.parser")

    tables = soup.find_all(
        "table"
    )  # Find all tables (adjust if more specific targeting is needed)

    for table in tables:
        tbody = table.find("tbody")

        if tbody is not None:
            try:

                rows = tbody.find_all("tr")
                #  print(rows)

                # Create a list of (first_td_text, row) tuples

                data = [(row.find("td").text.strip(), row) for row in rows]
                data.sort()  # Sort based on the first_td_text
                print(data)
                print("------------------------------")

                # Clear the existing tbody content
                tbody.clear()

                # Re-append the rows in the sorted order
                for _, row in data:
                    tbody.append(row)
            except Exception as e:
                print(e)

    return str(soup)


# ----- Example Usage -----

# Get the path to your HTML script file (if applicable)
html_file_path = (
    "/Users/evan.brociner/Desktop/evanbrociner.github.io/health_care_costs.html"
)

# Read the HTML code (either from the file or use your sample HTML string directly)
if html_file_path:
    with open(html_file_path, "r") as f:
        html_code = f.read()
else:
    html_code = """ 
    # ... (Your HTML table code) 
    """

# Sort the tables and get the modified HTML
modified_html = sort_table_by_first_td(html_code)

# Output the modified HTML (or save it to a file)
print(modified_html)
with open(html_file_path, "w") as f:
    f.write(modified_html)
