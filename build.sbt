name := "cahyanugraha"
 
version := "1.0" 
      
lazy val `cahyanugraha` = (project in file(".")).enablePlugins(PlayScala)

resolvers += "scalaz-bintray" at "https://dl.bintray.com/scalaz/releases"
      
resolvers += "Akka Snapshot Repository" at "http://repo.akka.io/snapshots/"
      
scalaVersion := "2.12.2"

libraryDependencies ++= Seq( 
  jdbc, 
  ehcache, 
  ws, 
  specs2 % Test, 
  javaForms,
  guice, 
  javaJpa,
  "com.h2database" % "h2" % "1.4.196",
  "org.hibernate" % "hibernate-entitymanager" % "5.1.0.Final",
  "org.postgresql" % "postgresql" % "42.2.1")

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )  

      