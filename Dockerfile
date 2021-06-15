FROM openjdk:16

MAINTAINER Michael Kessler <micha.amkessler@gmail.com>

ADD backend/target/capstone-project-mk.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]