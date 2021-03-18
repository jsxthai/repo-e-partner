using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore; // add entity frameworkcore sql

namespace app.Models
{
    public class EFDataContext : DbContext 
    {
        public EFDataContext(DbContextOptions<EFDataContext> opt)
           : base(opt)
        { }

        public DbSet<Customer> Customers { get; set; }
    }
}
