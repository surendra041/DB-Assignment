# TEST
1.Explain the relationship between the "Product" and "ProductCategory" entities from the above diagram

** The relationship between the product and product category is  many-to-one relationships.you will need to query across multiple collections by referencing related documents.This method offers more flexibility and scalability in managing interconnected data but may require additional queries compared to embedded documents **

2.How could you ensure that each product in the "Product" table has a valid category assigned to it 

** MongoDB using Mongoose  you can use schema validation to ensure that each product document in the "Product" collection has a valid category assigned to it. You can define a reference to the "ProductCategory" schema within the "Product" schema and specify that the category field must be of type ObjectId and reference the "ProductCategory" collection. **
