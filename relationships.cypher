// Create publication-product relationship
MATCH (prod:Product)
MATCH (pub:Publication {PubId : prod.PublicationId})
MERGE (pub)-[:CONTAINS]->(prod);

// Create store-publication relationship

//ea647b7f-7687-4e06-9f2d-a179b6b235f7
MATCH	(p:Publication { PubId: '463cf50a-81e3-4026-b242-26c8a1564748' }), 
		(s:Store { StoreId: 'ea647b7f-7687-4e06-9f2d-a179b6b235f7' })
CREATE (s)-[:PUBLISHED]->(p);
MATCH	(p:Publication { PubId: '02c3d8fa-fa90-44a1-96e7-d4a76ceafe2c' }), 
		(s:Store { StoreId: 'ea647b7f-7687-4e06-9f2d-a179b6b235f7' })
CREATE (s)-[:PUBLISHED]->(p);

//1cba07af-48e6-4f65-824a-01d9a765c3c8
MATCH	(p:Publication { PubId: '463cf50a-81e3-4026-b242-26c8a1564748' }), 
		(s:Store { StoreId: '1cba07af-48e6-4f65-824a-01d9a765c3c8' })
CREATE (s)-[:PUBLISHED]->(p);
MATCH	(p:Publication { PubId: '02c3d8fa-fa90-44a1-96e7-d4a76ceafe2c' }), 
		(s:Store { StoreId: '1cba07af-48e6-4f65-824a-01d9a765c3c8' })
CREATE (s)-[:PUBLISHED]->(p);

//7815553f-1371-4f72-bfaf-bfe6b7cb3ba5
MATCH	(p:Publication { PubId: '463cf50a-81e3-4026-b242-26c8a1564748' }), 
		(s:Store { StoreId: '7815553f-1371-4f72-bfaf-bfe6b7cb3ba5' })
CREATE (s)-[:PUBLISHED]->(p);
MATCH	(p:Publication { PubId: '02c3d8fa-fa90-44a1-96e7-d4a76ceafe2c' }), 
		(s:Store { StoreId: '7815553f-1371-4f72-bfaf-bfe6b7cb3ba5' })
CREATE (s)-[:PUBLISHED]->(p);

//5ed1795e-7e5c-4dd5-86f0-0d888aec3429
MATCH	(p:Publication { PubId: '463cf50a-81e3-4026-b242-26c8a1564748' }), 
		(s:Store { StoreId: '5ed1795e-7e5c-4dd5-86f0-0d888aec3429' })
CREATE (s)-[:PUBLISHED]->(p);
MATCH	(p:Publication { PubId: '02c3d8fa-fa90-44a1-96e7-d4a76ceafe2c' }), 
		(s:Store { StoreId: '5ed1795e-7e5c-4dd5-86f0-0d888aec3429' })
CREATE (s)-[:PUBLISHED]->(p);

//3ba677d9-c7fe-4aea-ab18-e871085f5b69
MATCH	(p:Publication { PubId: '463cf50a-81e3-4026-b242-26c8a1564748' }), 
		(s:Store { StoreId: '3ba677d9-c7fe-4aea-ab18-e871085f5b69' })
CREATE (s)-[:PUBLISHED]->(p);
MATCH	(p:Publication { PubId: '02c3d8fa-fa90-44a1-96e7-d4a76ceafe2c' }), 
		(s:Store { StoreId: '3ba677d9-c7fe-4aea-ab18-e871085f5b69' })
CREATE (s)-[:PUBLISHED]->(p);



