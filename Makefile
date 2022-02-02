publish:
	npm publish --dry-run

install:
	npm ci

lint:
	npx eslint .

fix-lint:
	npx eslint --fix .

test:
	node --experimental-vm-modules --no-warnings node_modules/jest/bin/jest --bail

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test-watch:
	node --experimental-vm-modules --no-warnings node_modules/jest/bin/jest --bail --watch

