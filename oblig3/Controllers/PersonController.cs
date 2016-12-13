using oblig3.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace oblig3.Controllers
{
    public class PersonController : ApiController
    {
        // GET: api/Person
        public List<DomainModel> Get()
        {
            DB db = new DB();
            return db.getAllApplications();
        }

        // GET: api/Person/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Person
        public string Post([FromBody]DomainModel inPerson)
        {
            DB db = new DB();
            if(ModelState.IsValid)
            {
                return db.registerNew(inPerson);
            }
            else
            {
                return "Not valid model";
            }
            
        }

        // PUT: api/Person/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE: api/Person/5
        //public void Delete(int id)
        //{
        //}
    }
}
