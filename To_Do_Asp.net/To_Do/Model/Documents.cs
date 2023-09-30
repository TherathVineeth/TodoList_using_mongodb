using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace To_Do_List.Model
{
    public class Documents
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public ObjectId Id { get; set; }

        public string Tittle { get; set; }

        public string Image { get; set; }
    }
}
