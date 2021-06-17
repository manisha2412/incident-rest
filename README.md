# Spring Boot incidents-rest application

This application shows how to connect to a Cloudant database using the official [Cloudant Java library](https://github.com/cloudant/java-cloudant).

## Pre-requisites

* [Apache Maven](https://maven.apache.org/)

## Building and running

Before running create a `src/main/resources/cloudant.properties` file with your Cloudant credentials:

~~~
cloudant.username=cloudantUsername
cloudant.password=cloudantPassword
cloudant.url=cloudantUrl
cloudant.db=databaseName
~~~

To build and run:

* `mvn clean install`
* `java -jar target/greeting-springboot-0.0.1-SNAPSHOT.jar`

Available endpoints:

* `http://localhost:8080/databases`
* `http://localhost:8080/incidents`
* `http://localhost:8080/incidents/{id}`

Create a new greeting by supplying some content:

`curl -H "Content-Type: application/json" -d '{"content":"test123"}' http://localhost:8080/incidents`

Ask for all known greetings:

`curl http://localhost:8080/incidents`

Ask for a particular incidents:

`curl http://localhost:8080/incidents/ID`

Delete a greeting:

`curl -X DELETE http://localhost:8080/incidents/ID`

This app is deployement on heroku
