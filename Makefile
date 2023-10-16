build-prod:
	ng build --configuration=production

deploy-to-firebase:
	firebase deploy

build-and-deploy: build-prod deploy-to-firebase

push:
	git add .
	git commit -m "update"
	git push