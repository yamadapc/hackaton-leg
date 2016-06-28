get_seed:
	rm -f countries.json
	wget https://cdn.rawgit.com/everypolitician/everypolitician-data/85438271cfc9e90f5f126a37e183b53401a09b7d/countries.json

download:
	node ./download-all.js
