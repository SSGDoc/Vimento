using Microsoft.VisualStudio.TestTools.UnitTesting;
using Vimento.DataAccess;
using System.Collections.Generic;
using Vimento.Model;
using System;

namespace Test
{
    [TestClass]
    public class TestConnectivity
    {
        [TestMethod]
        public void TestConnectionToDB()
        {
            //Arrange
            CompanyData cd = new CompanyData();
            List<Company> companyList = new List<Company>();

            //Act
            companyList = cd.GetAllCompanies();
            //Assert
            Assert.IsTrue(companyList.Count > 0);

        }
    }
}
