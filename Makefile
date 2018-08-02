up: ## Register container and install dependencies
	docker-compose up

test: ## Runs test once
	docker-compose run node npm t

watch: ## Watch for change and run tests
	docker-compose run node npm run watch
