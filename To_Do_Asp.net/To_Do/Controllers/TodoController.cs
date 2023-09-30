using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using To_Do_List.DBsetting;
using To_Do_List.Model;

namespace To_Do_List.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {

        public readonly IMongoCollection<Documents> _documents;

        public TodoController(IOptions<DBclass> opton)
        {
            var database = new MongoClient(opton.Value.Connectionstring);
            _documents = database.GetDatabase(opton.Value.Databasename).GetCollection<Documents>(opton.Value.CollectionName);
        }
        [HttpGet]
        public async  Task<IActionResult> Get()
        {
            var result =  _documents.FindSync(_ =>  true).ToListAsync();
            return Ok(result);
        }


        [HttpPost]
        public async Task<IActionResult> Post(Documents data)
        {
            if (data == null)
            {
                return NoContent();
            }
           await _documents.InsertOneAsync(data);
            return Ok(data);
        } 


    }
}
