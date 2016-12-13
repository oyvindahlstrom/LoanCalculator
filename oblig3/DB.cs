using oblig3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static oblig3.Models.ModelContext;

namespace oblig3
{
    public class DB
    {
        /*
         * This method recives every apply for loan from the database
         */
        public List<DomainModel> getAllApplications()
        {
            try
            {
                List<DomainModel> everyPerson = new List<DomainModel>();

                using (ModelContext db = new ModelContext())
                {
                    everyPerson = (from per 
                                   in db.Persons
                                   select new DomainModel()
                                   {
                                       socialSecurity   = per.socialSecurity,
                                       phone            = per.phone,
                                       email            = per.email,
                                       amount           = per.amount,
                                       interest         = per.interest,
                                       years            = per.years,
                                       monthly          = per.monthly
                                   }).ToList();
                    return everyPerson;
                }
            }
            catch(Exception error)
            {
                return null;
            }
        }

        /*
         * Registers a new apply for loan.
         * The function first attempts to see if this person already
         * exists in the database. If the person exists it returns a custom message.
         * Otherwise the new data is stored.
         */
        public string registerNew (DomainModel inPerson)
        {
            ModelContext db = new ModelContext();
            Person newPerson = new Person()
            {
                socialSecurity  = inPerson.socialSecurity,
                phone           = inPerson.phone,
                email           = inPerson.email,
                amount          = inPerson.amount,
                interest        = inPerson.interest,
                years           = inPerson.years,
                monthly         = inPerson.monthly
            };
            try
            {
                bool checkExisting = db.Persons.Any(per => per.socialSecurity.Equals(newPerson.socialSecurity));
                
                if (!checkExisting)
                {
                    try
                    {
                        db.Persons.Add(newPerson);
                        db.SaveChanges();
                        return "OK";
                    }
                    catch (Exception error)
                    {
                        return "ERROR";
                    }
                }
                else
                {
                    return "Already exists.";
                }
            }
            catch(Exception error)
            {
                return "ERROR";
            }
        }
    }
}