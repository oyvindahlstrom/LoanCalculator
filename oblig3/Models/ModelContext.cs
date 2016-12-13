namespace oblig3.Models
{
    using System.Data.Entity;
    using System.Data.Entity.ModelConfiguration.Conventions;
    using System.ComponentModel.DataAnnotations;

    public partial class ModelContext : DbContext
    {
        public ModelContext()
            : base("name=ModelContext")
        {
            Database.CreateIfNotExists();
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
        public DbSet<Person> Persons { get; set; }
        public class Person
        {

            //public string applyID { get; set; }
            [Key]
            public string socialSecurity { get; set; }
            public string phone { get; set; }
            public string email { get; set; }
            public int amount { get; set; }
            public int interest { get; set; }
            public int years { get; set; }
            public double monthly { get; set; }
        }
    }
}
