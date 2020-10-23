using System.Collections.Generic;
using Vimento.Model;
using MySql.Data.MySqlClient;
using System;
using System.Threading;
using System.Globalization;

namespace Vimento.DataAccess
{
    public class CompanyData
    {
        private string _connectionString;
        public CompanyData()
        {
            _connectionString = "server=127.0.0.1;port=3306;uid=root;pwd=digital;database=datawarehouse";
            
        }

        public List<Company> GetAllCompanies()
        {
            CultureInfo.CurrentCulture = CultureInfo.CreateSpecificCulture("en-GB");
            List<Company> companies = new List<Company>();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetAllCompanies = connection.CreateCommand())
                {
                    
                    cmdGetAllCompanies.CommandText = "SELECT adresse.adresseId, kundeId, navn, branche, antalAnsatte, vejNavn, husNr, postNr, byNavn, breddeGrad, laengdeGrad, downFiber, upFiber, downKabel, upKabel, downDsl, upDsl, mobilDown FROM virksomhed, adresse, teknologi WHERE virksomhed.adresseId = adresse.adresseId AND adresse.tekId = teknologi.tekId";
                    MySqlDataReader companyReader = cmdGetAllCompanies.ExecuteReader();

                    while (companyReader.Read())
                    {
                        Company Company = new Company();
                        Company.CompanyID = companyReader.GetInt32(companyReader.GetOrdinal("kundeId"));
                        Company.Name = companyReader.GetString(companyReader.GetOrdinal("navn"));
                        Company.Business = companyReader.GetString(companyReader.GetOrdinal("branche"));
                        Company.AmountOfEmployees = companyReader.GetInt32(companyReader.GetOrdinal("antalAnsatte"));
                        int AddressID = companyReader.GetInt32(companyReader.GetOrdinal("adresseId"));

                        Company.Address.StreetName = companyReader.GetString(companyReader.GetOrdinal("vejNavn"));
                        Company.Address.HouseNr = companyReader.GetInt32(companyReader.GetOrdinal("husNr"));
                        Company.Address.ZipCode = companyReader.GetInt32(companyReader.GetOrdinal("postNr"));
                        Company.Address.City = companyReader.GetString(companyReader.GetOrdinal("byNavn"));
                        Company.Address.Lat = companyReader.GetDouble(companyReader.GetOrdinal("breddeGrad"));
                        Company.Address.Long = companyReader.GetDouble(companyReader.GetOrdinal("laengdeGrad"));

                        Company.Address.Technology.DownFiber = companyReader.GetInt32(companyReader.GetOrdinal("downFiber"));
                        Company.Address.Technology.UpFiber = companyReader.GetInt32(companyReader.GetOrdinal("upFiber"));
                        Company.Address.Technology.DownCable = companyReader.GetInt32(companyReader.GetOrdinal("downKabel"));
                        Company.Address.Technology.UpCable = companyReader.GetInt32(companyReader.GetOrdinal("upKabel"));
                        Company.Address.Technology.DownDSL = companyReader.GetInt32(companyReader.GetOrdinal("downDsl"));
                        Company.Address.Technology.UpDSL = companyReader.GetInt32(companyReader.GetOrdinal("upDsl"));
                        Company.Address.Technology.MobileDownRange = companyReader.GetString(companyReader.GetOrdinal("mobilDown"));

                        companies.Add(Company);
                    } 
                }
            }
            return companies;
        }

    } 
}

