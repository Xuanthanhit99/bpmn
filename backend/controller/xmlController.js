const { XMLValidator } = require("fast-xml-parser");
const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://xuanthanhit99:YopQnjJmAYJmVMDl@cluster0.qbhc3gj.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

 const postXmlController = async (req, res) => {
    var xmlDoc = req?.body;
    console.log("xmlDoc", req?.body);  
      try {
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
        // Query for a movie that has the title 'Back to the Future'
        database.collection("customers").insertOne(xmlDoc, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        });
    
        res.send("success");
      } catch {
        console.log("first")
      }
  };

  const getXmlController = async (req, res) => {
    var xmlDoc = req?.body?.params;  
      try {
        const database = client.db('sample_mflix');
        const movies = database.collection("customers");
        let o_id = new ObjectId(xmlDoc)
        const movie = await movies.findOne({"_id":o_id});
        delete movie._id;
        res.send(movie);
      } catch {
        console.log("fa")
      }
  };

module.exports = {
    postXmlController: postXmlController,
    getXmlController: getXmlController,
}
  