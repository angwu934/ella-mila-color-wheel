from bs4 import BeautifulSoup

with open("nailpolishcolors.html", "r") as f:
    doc = BeautifulSoup(f, "html.parser")

tags = doc.find_all("img", {"class": "fade-in lazyloaded"})

color_names = []

for i in range(len(tags)):
    name = tags[i].get("alt")
    if name not in color_names and name != "":
        color_names.append(name)

print(color_names)
print(type(tags))
print(type(tags[5]))