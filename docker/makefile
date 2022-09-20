# Makefile for DEV purposes
# Author: Christian Dangl

.PHONY: help
.DEFAULT_GOAL := help


help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ---------------------------------------------------------------------------------------------

run: ## Runs the Shopware 6 project
	docker exec shop bash -c 'sudo chown www-data:www-data -R /var/www/html/custom/plugins/NotificationCenter'
	# -------------------------------------------------------------------------------------------------
	docker exec shop bash -c 'cd /var/www/html/custom/plugins/NotificationCenter && make install'
	docker exec shop bash -c 'cd /var/www/html/custom/plugins/NotificationCenter && make build'
	docker exec shop bash -c 'php bin/console cache:clear'
	open http://localhost
	open http://localhost/admin