cd Desktop/Coding_Projects/;
code cafe-infinite cafe-infinite/public/app.js cafe-infinite/public/index.html cafe-infinite/gulpfile.js;
kill -9 $(lsof -t -i:8080);
open http://localhost:5000/ & open http://localhost:4000/ & open https://code.visualstudio.com/docs/editor/command-line &
cd cafe-infinite; npm test;