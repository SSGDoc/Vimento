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
                    
                    cmdGetAllCompanies.CommandText = "SELECT kundeId, navn, branche, antalAnsatte, adresseId FROM virksomhed";
                    MySqlDataReader companyReader = cmdGetAllCompanies.ExecuteReader();

                    while (companyReader.Read())
                    {
                        Company Company = new Company();

                        Company.CompanyID = companyReader.GetInt32(companyReader.GetOrdinal("kundeId"));
                        Company.Name = companyReader.GetString(companyReader.GetOrdinal("navn"));
                        Company.Business = companyReader.GetString(companyReader.GetOrdinal("branche"));
                        Company.AmountOfEmployees = companyReader.GetInt32(companyReader.GetOrdinal("antalAnsatte"));
                        int AddressID = companyReader.GetInt32(companyReader.GetOrdinal("adresseId"));
                        Company.Address = GetAddressFromAddressID(AddressID);
                        
                        companies.Add(Company);
                        
                    } 
                }
            }
         
            return companies;
        }

        public Address GetAddressFromAddressID(int id)
        {
            Address Address = new Address();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetAddresses = connection.CreateCommand())
                {
                    cmdGetAddresses.CommandText = "SELECT adresseId, vejNavn, husNr, postNr, byNavn, breddeGrad, laengdeGrad, tekID FROM adresse WHERE adresseId = @adresseId";
                    cmdGetAddresses.Parameters.AddWithValue("adresseId", id);
                    MySqlDataReader addressReader = cmdGetAddresses.ExecuteReader();
                    if (addressReader.Read())
                    {
                        Address address = new Address();
                        
                        address.AddressID = addressReader.GetInt32(addressReader.GetOrdinal("adresseId"));
                        address.StreetName = addressReader.GetString(addressReader.GetOrdinal("vejNavn"));
                        address.HouseNr = addressReader.GetInt32(addressReader.GetOrdinal("husNr"));
                        address.ZipCode = addressReader.GetInt32(addressReader.GetOrdinal("postNr"));
                        address.City = addressReader.GetString(addressReader.GetOrdinal("byNavn"));
                        address.Lat = addressReader.GetDouble(addressReader.GetOrdinal("breddeGrad"));
                        address.Long = addressReader.GetDouble(addressReader.GetOrdinal("laengdeGrad"));
                        int tekID = addressReader.GetInt32(addressReader.GetOrdinal("tekID"));
                        address.Technology = GetTechnologyFromTekID(tekID);

                    }
                }
            }
            return Address;
        }

        public Technology GetTechnologyFromTekID(int tekID)
        {
            Technology Tech = new Technology();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetTechnologies = connection.CreateCommand())
                {
                    cmdGetTechnologies.CommandText = "SELECT downFiber, upFiber, downKabel, upKabel, downDsl, upDsl, mobilDown FROM Teknologi WHERE tekID = @tekID";
                    cmdGetTechnologies.Parameters.AddWithValue("tekID", tekID);
                    MySqlDataReader TechReader = cmdGetTechnologies.ExecuteReader();

                    if (TechReader.Read())
                    {
                        Tech.DownFiber = TechReader.GetInt32(TechReader.GetOrdinal("downFiber"));
                        Tech.UpFiber = TechReader.GetInt32(TechReader.GetOrdinal("upFiber"));
                        Tech.DownCable = TechReader.GetInt32(TechReader.GetOrdinal("downKabel"));
                        Tech.UpCable = TechReader.GetInt32(TechReader.GetOrdinal("upKabel"));
                        Tech.DownDSL = TechReader.GetInt32(TechReader.GetOrdinal("downDsl"));
                        Tech.UpDSL = TechReader.GetInt32(TechReader.GetOrdinal("upDsl"));
                        Tech.MobileDownRange = TechReader.GetString(TechReader.GetOrdinal("mobilDown"));

                    }


                }
            }
            return Tech;
        }

    } 
}

