build-prod:
	ng build --configuration=production

push:
	git add .
	git commit -m "update"
	git push