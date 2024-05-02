import re
from urllib.parse import urlparse
import pandas as pd
import csv
import os
from openai import OpenAI
from tqdm import tqdm
import nltk
import json
import datetime
from serpapi import GoogleSearch


df_filtered = df_filtered[~df_filtered.parent_org_lbn.str.contains("HOLDING COPMANY")]
df_filtered = df_filtered[~df_filtered.parent_org_lbn.str.contains("HOLDING CO")]

results = []

not_good_website = [
    "www.loopnet.com",
    "www.healthgrades.com",
    "www.zocdoc.com",
    "www.yelp.com",
    "en.wikipedia.org",
    "www.irs.gov",
    "www.mapquest.com",
    "www.goodrx.com",
]

already_output_df = None


def all_same(items):
    return all(x == items[0] for x in items)


try:
    # Attempt to load previously generated responses (for efficiency)
    already_output_df = pd.read_csv("finding_group_name_through_serp.csv")

except Exception as e:
    print(e)  # Log any errors if the file can't be loaded

for grouping_id in df_filtered["grouping_id"].unique()[:40]:

    #            # Check if results exist for this group to avoid redundant API calls
    #     if already_output_df is not None and 'grouping_id' in already_output_df['grouping_id'].to_list():
    #         results.append(already_output_df[already_output_df['grouping_id'] == 'grouping_id'].iloc[0].to_dict())

    #     else:
    domain_list = []
    for index, row in df_filtered[df_filtered["grouping_id"] == grouping_id].iterrows():

        print("Parent Name: ", row["parent_org_lbn"])

        print("Grouping ID: ", row["grouping_id"])
        serp_restult, full_serp_results = getting_website(
            row["parent_org_lbn"],
            row["adr_line_1"],
            row["city_name"],
            row["state_abbreviation"],
            row["zipcode"],
        )

        serp_restult_link = full_serp_results["link"]

        domain_serp = urlparse(serp_restult_link).netloc
        domain_list.append(domain_serp)

        if domain_serp in not_good_website:
            serp_restult = "Did not find reliable information"

        if domain_serp[-4:] == ".gov":
            serp_restult = "Did not find reliable information"

        print(domain_serp)
        print("Serp Result", serp_restult)
        print("Human Result:", row["grouping_name"])
        print()
        print()
        print()
        print()
        print()

        # if not all_same(domain_list):
        #     serp_restult = 'Did not find reliable information'

        results.append(
            {
                "grouping_id": row["grouping_id"],
                "Serp Result": serp_restult,
                "Human Result": row["grouping_name"],
                "serp_input": row["parent_org_lbn"]
                + " + "
                + row["adr_line_1"]
                + " "
                + row["city_name"]
                + " "
                + row["state_abbreviation"]
                + " "
                + row["zipcode"],
                "Full Serp Results": full_serp_results,
            }
        )
        break

results_df = pd.DataFrame(results)
results_df.to_csv("finding_group_name_through_serp.csv", index=False)
