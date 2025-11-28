# Contenedor 1 para contruit / crear el jar
FROM maven:3.9-eclipse-temurin-21 AS builder
WORKDIR /app

COPY pom.xml .
COPY src ./src

# En la imagen tenemos esta estructura tras la Copia
# /app
# /app/pom.xml
# /app/src/ (con todo el contenido de la carpeta del anfitrion/host)


RUN mvn -q -e -DskipTests package
# Ejecuta maven


### SIGUIENTE ETAPA ###

# Contenedor dos para ejecutar tras la aplicacion
FROM eclipse-temurin:21-jre-alpine 
# mas ligero que la primera etapa
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

# CMD [ "executable" ] ==> Dos maneras de lanzar un comando
# uno con parametros (ENTRYPOINT) y la otra manera sin parametros (CMD)
ENTRYPOINT [ "java", "-jar", "app.jar" ]