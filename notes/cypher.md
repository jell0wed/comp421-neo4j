# Cypher Query Language

* declarative graph query language
* pattern oriented
* allows to focus on your application domains instead of getting lost in technicalities
  * focuses on the clarity of expression *what* to retrieve from a graph and now *how* to retrieve it
  * very expressive
* relatively small but yet still very powerful

### Basic Query Structure

#### Graph traversal / Data retrieval

##### MATCH clause

- indicates the pattern which should be used to traverse the graph


- placeholders may be present to capture and use different information within the query

##### WHERE clause

may be bundled with a `WHERE` clause

``` 
MATCH (n1:NodeLabel1)-->(n2:NodeLabel2)
```

- adds constraint to a match pattern or to filter results that passes through the `MATCH` clause

##### RETURN clause

used to state what a query should return

#### Examples

``` 
MATCH (cust:Customer)-[:PURCHASED]->(:Order)-[o:ORDERS]->(p:Product),
      (p)-[:PART_OF]->(c:Category {categoryName:"Produce"})
RETURN DISTINCT cust.contactName as CustomerName, SUM(o.quantity) AS TotalProductsPurchased
```

* *cust*, *o*, *p*, *c* are *placeholders* that captures the informations
* use of pattern matching to specify a graph traversal
* (node_placeholder:NodeLabel)-[:RELATIONSHIP_NAME]->(node_placeholder2:NodeLabel {propertyName: "property"})

``` 
MATCH (js:Person)-[:KNOWS]-()-[:KNOWS]-(surfer)
WHERE js.name = "Johan" AND surfer.hobby = "surfing"
RETURN DISTINCT surfer
```

* use of WHERE clause to enforce constraint or filter information

#### Graph manipulation / Data retrieval

##### CREATE

* creates all the new part of a pattern : (*create a new :Bar node and a :FOO relationship that is associated with a node having id = 1*)

``` 
MATCH (n) WHERE id = 1 CREATE (n)-[:FOO]->(b:Bar)
```

##### MERGE

Will `MATCH`or `CREATE` (only if it doesn't exists)

#### Aggregation functions

cypher has various built-in functions like `count()` `sum()` `avg()` `min()` 

#### Indexes / Constraints

* uniquely idenfifying object defined in Neo4j
* mainly used by `MERGE` queries to ensure nodes are uniquely created
* much more like SQL

``` 
CREATE CONSTRAINT on (u:User) ASSERT u.id IS UNIQUE;
CREATE INDEX on :User(name);
```

and then users are uniquely identified through *name*

#### Examples

``` 
MATCH (neo:Database {name:"Neo4j"})
MATCH (johan:Person {name:"Johan"})
CREATE (johan)-[:FRIEND]->(:Person:Expert {name:"Max"})-[:WORKED_WITH]->(neo)
```

``` 
MATCH (you {name:"You"}), (expert)-[:WORKED_WITH]->(db:Database {name:"Neo4j"}),
  p = shortestPath( (you)-[:FRIEND*..5]-(expert) )
RETURN p,db
```















----

http://neo4j.com/docs/stable/cypher-introduction.html

https://www.airpair.com/neo4j/posts/getting-started-with-neo4j-and-cypher

http://neo4j.com/developer/cypher-query-language/#_about_cypher