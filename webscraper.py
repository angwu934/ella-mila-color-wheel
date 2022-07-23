
from bs4 import BeautifulSoup
import requests

#Get all of the colors:
# with open("nailpolishcolors.html", "r") as f:
#     doc = BeautifulSoup(f, "html.parser")

# tags = doc.find_all("img", {"class": "fade-in lazyloaded"})

# color_names = []

# for i in range(len(tags)):
#     name = tags[i].get("alt")
#     if name not in color_names and name != "":
#         color_names.append(name)

# print(color_names)

#Get colors for each collection
urls = ["https://www.ellamila.com/collections/nail-gifts-value-sets/products/enchanted-collection",
        "https://www.ellamila.com/collections/featured-collections/products/me-collection-10-pack",
        "https://www.ellamila.com/collections/featured-collections/products/dream-collection-8-pack",
        "https://www.ellamila.com/collections/nail-gifts-value-sets/products/dream-collection-c",
        "https://www.ellamila.com/collections/nail-gifts-value-sets/products/gliiter-collection",
        "https://www.ellamila.com/collections/nail-gifts-value-sets/products/samba-collection-b"]

collections = []

for i in range(len(urls)):
    result = requests.get(urls[i])
    doc = BeautifulSoup(result.text, "html.parser")

    titletag = doc.find_all("h1", {"class": "product_name"})
    title = titletag[0].text

    parent = doc.find_all("span")
    colorstr = ""
    for i in range(len(parent)):
        if "Color" in parent[i].text:
            colorstr = parent[i].text
            break

    colorarr = colorstr.split(":")[1].split(", ")
    colorarr.insert(0, title)
    collections.append(colorarr)

print(collections)

    