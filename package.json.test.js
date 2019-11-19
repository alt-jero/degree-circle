import test from 'ava'

import pkg from './package'

const validations = {
  github: {
    username: 'alt-jero'
  },
  author: {
    name: 'Jeremy Rumble',
    email: 'jero.rumble@gmail.com'
  },
  allowedLicenses: [
    'Unlicense'
  ],
  testScriptInvocation: 'ava'
}

const semverRegex = /^((([0-9]+)\.([0-9]+)\.([0-9]+)(?:-([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)$/

function githubHomepage (t, pkg) {
  t.true( pkg.homepage === `https://github.com/${validations.github.username}/${pkg.name}#readme` )
}
function githubBugs (t, pkg) {
  t.truthy( pkg.bugs )
  t.true( typeof pkg.bugs === 'object' )
  t.true( pkg.bugs.url === `https://github.com/${validations.github.username}/${pkg.name}/issues` )
}
function githubRepository (t, pkg) {
  t.truthy( pkg.repository )
  t.true( typeof pkg.repository === 'object' )
  t.true( pkg.repository.type === 'git')
  t.true( pkg.repository.url === `git+https://github.com/${validations.github.username}/${pkg.name}.git` )
}
githubHomepage.title = (provided, value) => `[${provided}] Package Homepage is correct`
githubBugs.title = (provided, value) => `[${provided}] Package Bugs URL is correct`
githubRepository.title = (provided, value) => `[${provided}] Package Repository is correct`


function hasAva (t, value) { t.true( Boolean(value.ava) )}
function isAnArray (t, value) { t.true( Array.isArray(value) )}
function isAString (t, value) { t.true( typeof value === 'string' )}
function isAnObject (t, value) { t.true( typeof value === 'object' )}
function semverMatch (t, value) { t.true( semverRegex.test(value) )}
function matchTestScript(t, value) { t.true( value === validations.testScriptInvocation )}
function matchAuthorName(t, value) { t.true( value.name === validations.author.name )}
function matchAuthorEmail(t, value) { t.true( value.email === validations.author.email )}
function isAllowedLicense (t, value) { t.true( validations.allowedLicenses.includes(value))}
function hasPositiveLength (t, value) { t.true( value.length > 0 )}

hasAva.title = (provided, value) => `${provided} has key 'ava' with truthy value`
isAnArray.title = (provided, value) => `${provided} is an array`
isAString.title = (provided, value) => `${provided} is a string`
isAnObject.title = (provided, value) => `${provided} is an object`
semverMatch.title = (provided, value) => `${provided} is a valid semver string`
matchTestScript.title = (provided, value) => `${provided} equals ${validations.testScriptInvocation}`
matchAuthorName.title = (provided, value) => `${provided}.name equals ${validations.author.name}`
matchAuthorEmail.title = (provided, value) => `${provided}.email equals ${validations.author.email}`
isAllowedLicense.title = (provided, value) => `${provided} (${value}) is listed as allowed in the test file`
hasPositiveLength.title = (provided, value) => `${provided} has a length > 0`

const nonBlankString = [isAString, hasPositiveLength]
const validateAuthorField = [isAnObject, matchAuthorName, matchAuthorEmail]
const validLicense = [isAString, isAllowedLicense]
const testScriptValid = [isAString, matchTestScript]
const requiredDevDeps = [hasAva]
const gitDefaults = [githubRepository, githubBugs, githubHomepage]
const keywordsValid = [isAnArray, hasPositiveLength]

test('pkg.name', nonBlankString, pkg.name)
test('pkg.main', nonBlankString, pkg.main)
test('pkg.author', validateAuthorField, pkg.author)
test('pkg.version', semverMatch, pkg.version)
test('pkg.license', validLicense, pkg.license)
test('pkg.scripts', isAnObject, pkg.scripts)
test('pkg.description', nonBlankString, pkg.description)
test('pkg.scripts.test', testScriptValid, pkg.scripts.test)
test('pkg.devDependencies', requiredDevDeps, pkg.devDependencies)
test('Git-Defaults', gitDefaults, pkg)
test('pkg.keywords', keywordsValid, pkg.keywords)