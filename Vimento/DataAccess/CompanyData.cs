using System.Collections.Generic;
using Vimento.Model;
using MySql.Data.MySqlClient;
using System;

namespace Vimento.DataAccess
{
    public class CompanyData
    {
        private string _connectionString;
        public CompanyData()
        {
            _connectionString = "server=127.0.0.1;uid=root;pwd=digital;database=datawarehouse";
        }

        public List<Company> GetAllCompanies()
        {
            Console.WriteLine("- GetAllCompanies");
            List<Company> companies = new List<Company>();
            AddressData adData = new AddressData();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetAllCompanies = connection.CreateCommand())
                {
                    cmdGetAllCompanies.CommandText = "SELECT the_Key, navn, branche, antalAnsatte FROM virksomhed";
                    MySqlDataReader companyReader = cmdGetAllCompanies.ExecuteReader();

                    while (companyReader.Read())
                    {
                        Company company = new Company();

                        company.TheKey = companyReader.GetInt32(companyReader.GetOrdinal("the_Key"));
                        company.Name = companyReader.GetString(companyReader.GetOrdinal("navn"));
                        company.Business = companyReader.GetString(companyReader.GetOrdinal("branche"));
                        company.AmountOfEmployees = companyReader.GetInt32(companyReader.GetOrdinal("antalAnsatte"));
                        company.Addresses = adData.GetAddressesFromCompanyKey(company.TheKey);
                        
                        companies.Add(company);
                        
                    } 
                }
            }
            
            return companies;
        }

    } 
}

