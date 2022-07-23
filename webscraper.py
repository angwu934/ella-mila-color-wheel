
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

# Get URLs for each collection
with open("collectionsets.html", "r") as f:
    collectionsdoc = BeautifulSoup(f, "html.parser")
individualcollectionurls = collectionsdoc.find_all("a", {"class": "product-info__caption"})
urls = []
for i in range(len(individualcollectionurls)):
    href = individualcollectionurls[i].get("href")
    if "nail-care" not in href:
        urls.append(href)

# print(individualcollectionurls[0])


#Get colors for each collection
# urls = ["https://www.ellamila.com/collections/nail-gifts-value-sets/products/enchanted-collection",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/dream-collection-c",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/gliiter-collection",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/samba-collection-b",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/dream-collection-b",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/love-collection-10-pack",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/elite-b-collection",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/bonbon-collection-8-pack",
#         "https://www.ellamila.com/collections/nail-gifts-value-sets/products/love-collection-b"]

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
    
    colorarr = []
    if "Color" in colorstr:
        colorarr = colorstr.split(":")[1].split(", ")
    else:
        colorarr = colorstr.split(", ")
    colorarr.insert(0, title)
    collections.append(colorarr)

print(collections)

    