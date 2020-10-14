using System;
using System.Collections.Generic;
using System.Configuration;
using MySql.Data.MySqlClient;
using Vimento.Model;

namespace Vimento.DataAccess
{
    public class AddressData
    {
        private string _connectionString;
        public AddressData()
        {
            _connectionString = "server=127.0.0.1;uid=root;pwd=digital;database=datawarehouse";
        }


        public List<Address> GetAllAddresses()
        {
            Console.WriteLine("- GetAllAddresses");
            List<Address> addresses = new List<Address>();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetAllAddresses = connection.CreateCommand())
                {
                    cmdGetAllAddresses.CommandText = "SELECT the_Key, vejNavn, husNr, postNr FROM adresse";
                    MySqlDataReader addressReader = cmdGetAllAddresses.ExecuteReader();

                    while (addressReader.Read())
                    {
                        Address address = new Address();
                        address.TheKey = addressReader.GetInt32(addressReader.GetOrdinal("the_Key"));
                        address.Name = addressReader.GetString(addressReader.GetOrdinal("vejNavn"));
                        address.HouseNr = addressReader.GetInt32(addressReader.GetOrdinal("husNr"));
                        address.ZipCode = addressReader.GetInt32(addressReader.GetOrdinal("postNr"));

                        address.Coordinates = GetCoordinatesFromAddressKey(address.TheKey);
                        address.Technologies = GetTechnologiesFromAddressKey(address.TheKey);
                        addresses.Add(address);
                        
                    }
                }
            }
            return addresses;
        }

        public List<Address> GetAddressesFromCompanyKey(int key)
        {
            Console.WriteLine("- GetAddressesFromCompanyKey");
            List<Address> addresses = new List<Address>();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetAddresses = connection.CreateCommand())
                {
                    cmdGetAddresses.CommandText = "SELECT the_Key, vejNavn, husNr, postNr FROM adresse WHERE the_Key = @the_Key";
                    cmdGetAddresses.Parameters.AddWithValue("the_Key", key);
                    MySqlDataReader addressReader = cmdGetAddresses.ExecuteReader();

                    while (addressReader.Read())
                    {
                        Address address = new Address();

                        address.TheKey = addressReader.GetInt32(addressReader.GetOrdinal("the_Key"));
                        address.Name = addressReader.GetString(addressReader.GetOrdinal("vejNavn"));
                        address.HouseNr = addressReader.GetInt32(addressReader.GetOrdinal("husNr"));
                        address.ZipCode = addressReader.GetInt32(addressReader.GetOrdinal("postNr"));

                        address.Coordinates = GetCoordinatesFromAddressKey(address.TheKey);
                        address.Technologies = GetTechnologiesFromAddressKey(address.TheKey);
                        addresses.Add(address);
                        
                    }
                }
            }
            return addresses;
        }





        public Coordinate GetCoordinatesFromAddressKey(int key)
        {
            Console.WriteLine("- GetCoordinatesFromAddressKey");
            Coordinate coordinates = new Coordinate();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetCoordinates = connection.CreateCommand())
                {
                    cmdGetCoordinates.CommandText = "SELECT breddeGrad, laengdeGrad FROM koordinat WHERE the_Key = @the_Key";
                    cmdGetCoordinates.Parameters.AddWithValue("the_Key", key);
                    MySqlDataReader CoordReader = cmdGetCoordinates.ExecuteReader();

                    if (CoordReader.Read())
                    {
                            coordinates.Lat = CoordReader.GetDouble(CoordReader.GetOrdinal("breddeGrad"));
                            coordinates.Long = CoordReader.GetDouble(CoordReader.GetOrdinal("laengdeGrad"));
                        
                    }
                }
            }
            return coordinates;
        }

        public List<Technology> GetTechnologiesFromAddressKey(int key)
        {
            Console.WriteLine("- GetTechnologiesFromAddressKey");
            List<Technology> technologies = new List<Technology>();

            using (MySqlConnection connection = new MySqlConnection(_connectionString))
            {
                connection.Open();
                using (MySqlCommand cmdGetTechnologies = connection.CreateCommand())
                {
                    cmdGetTechnologies.CommandText = "SELECT navn, maxUp, maxDown, mobilDown FROM teknologi WHERE the_Key = @the_Key";
                    cmdGetTechnologies.Parameters.AddWithValue("the_Key", key);
                    MySqlDataReader TechReader = cmdGetTechnologies.ExecuteReader();

                    while (TechReader.Read())
                    {
                        Technology tech = new Technology();
                        
                            tech.Name = TechReader.GetString(TechReader.GetOrdinal("navn"));
                            tech.MaxUp = TechReader.GetInt32(TechReader.GetOrdinal("maxUp"));
                            tech.MaxDown = TechReader.GetInt32(TechReader.GetOrdinal("maxDown"));
                            tech.MobileDownRange = TechReader.GetString(TechReader.GetOrdinal("mobilDown"));
                        
                        technologies.Add(tech);

                        
                    } 


                }
            }
            return technologies;
        }

    }
}