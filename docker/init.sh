# Quick order
if [ -d "cypress-boilerplate" ]; then
  (cd cypress-boilerplate && git pull)
else
  git clone git@github.com:AlexZCP/cypress-boilerplate.git
fi
