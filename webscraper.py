# from bs4 import BeautifulSoup

# with open("nailpolishcolors.html", "r") as f:
#     doc = BeautifulSoup(f, "html.parser")

# tags = doc.find_all("img", {"class": "fade-in lazyloaded"})

# color_names = []

# for i in range(len(tags)):
#     name = tags[i].get("alt")
#     if name not in color_names and name != "":
#         color_names.append(name)

# print(color_names)
# print(type(tags))
# print(type(tags[5]))

from bs4 import BeautifulSoup 
import requests

birthday_url = ["https://www.ellamila.com/collections/featured-collections/products/me-collection-10-pack",
                "https://www.ellamila.com/collections/featured-collections/products/dream-collection-8-pack"]

for i in range(len(birthday_url)):
    birthday_result = requests.get(birthday_url[i])
    birthday_doc = BeautifulSoup(birthday_result.text, "html.parser")


    birthday_parent = birthday_doc.find_all("span")
    colorstr = ""
    for i in range(len(birthday_parent)):
        if "Color" in birthday_parent[i].text:
            colorstr = birthday_parent[i].text
            break

    print(colorstr)
    print(" ")
    print(colorstr.split(":")[1].split(", "))
    print("\n\n")

    