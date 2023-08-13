build:
	ng build --output-path docs --base-href /portfolio/
push:
	git add .
	git commit -m "Auto deploy"
	git push
deploy: build push
