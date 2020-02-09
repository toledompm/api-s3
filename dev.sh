#/bin/bash
# instrucao
# source dev.sh
# install_modules (somente na primeira vez ou tambem quando instala um modulo node)
# dkup

BASE=$PWD

function dkup {
  CD=$PWD
  cd $BASE
  docker-compose up -d
  cd $CD
}

function dkdown {
  CD=$PWD
  cd $BASE
  docker-compose down
  cd $CD
}

function install_modules {
  CD=$PWD
  cd $BASE
  docker-compose run app yarn install
  cd $CD
}
