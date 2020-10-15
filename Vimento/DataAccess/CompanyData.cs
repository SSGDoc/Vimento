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
            _connectionString = "server=127.0.0.1;port=3308;uid=root;pwd=Losninos77;database=datawarehouse";
            
        }

        public List<Company> GetAllCompanies()
        {
            CultureInfo.CurrentCulture = CultureInfo.CreateSpecificCulture("en-GB");
            Console.WriteLine("- GetAllCompanies");
            List<Company> companies = new List<Company>();
            AddressData adData = new AddressData();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetAllCompanies = connection.CreateCommand())
                {
                    //cmdGetAllCompanies.CommandText = "SELECT the_Key, navn, branche, antalAnsatte FROM virksomhed";
                    cmdGetAllCompanies.CommandText = "SELECT virksomhed.the_Key, virksomhed.navn, branche, antalAnsatte, vejNavn, husNr, postNr, laengdeGrad, breddeGrad FROM virksomhed, adresse, koordinat WHERE virksomhed.the_key = adresse.the_key AND virksomhed.the_key = koordinat.the_key";
                    MySqlDataReader companyReader = cmdGetAllCompanies.ExecuteReader();

                    while (companyReader.Read())
                    {
                        Company company = new Company();

                        company.TheKey = companyReader.GetInt32(companyReader.GetOrdinal("the_Key"));
                        company.Name = companyReader.GetString(companyReader.GetOrdinal("navn"));
                        company.Business = companyReader.GetString(companyReader.GetOrdinal("branche"));
                        company.AmountOfEmployees = companyReader.GetInt32(companyReader.GetOrdinal("antalAnsatte"));
                        company.Street = companyReader.GetString(companyReader.GetOrdinal("vejNavn"));
                        company.HouseNr = companyReader.GetInt32(companyReader.GetOrdinal("husNr"));
                        company.ZipCode = companyReader.GetInt32(companyReader.GetOrdinal("postNr"));
                        company.Coordinates.Long = companyReader.GetDouble(companyReader.GetOrdinal("laengdeGrad"));
                        company.Coordinates.Lat = companyReader.GetDouble(companyReader.GetOrdinal("breddeGrad"));

                        Console.WriteLine(company.Coordinates.Lat);
                        //company.Addresses = adData.GetAddressesFromCompanyKey(company.TheKey);

                        companies.Add(company);
                        
                    } 
                }
            }
         
            return companies;
        }

    } 
}

