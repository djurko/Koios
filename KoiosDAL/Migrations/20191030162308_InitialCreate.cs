using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KoiosDAL.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    CountryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.CountryId);
                });

            migrationBuilder.CreateTable(
                name: "Settlements",
                columns: table => new
                {
                    SettlementId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    ZipCode = table.Column<string>(nullable: false),
                    CountryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Settlements", x => x.SettlementId);
                    table.ForeignKey(
                        name: "FK_Settlements_Countries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Countries",
                columns: new[] { "CountryId", "Name" },
                values: new object[,]
                {
                    { 1, "Afghanistan" },
                    { 125, "Nicaragua" },
                    { 126, "Niger" },
                    { 127, "Nigeria" },
                    { 128, "North Korea" },
                    { 129, "North Macedonia" },
                    { 130, "Norway" },
                    { 131, "Oman" },
                    { 132, "Pakistan" },
                    { 133, "Palau" },
                    { 124, "New Zealand" },
                    { 134, "Palestine State" },
                    { 136, "Papua New Guinea" },
                    { 137, "Paraguay" },
                    { 138, "Peru" },
                    { 139, "Philippines" },
                    { 140, "Poland" },
                    { 141, "Portugal" },
                    { 142, "Qatar" },
                    { 143, "Romania" },
                    { 144, "Russia" },
                    { 135, "Panama" },
                    { 123, "Netherlands" },
                    { 122, "Nepal" },
                    { 121, "Nauru" },
                    { 100, "Lithuania" },
                    { 101, "Luxembourg" },
                    { 102, "Madagascar" },
                    { 103, "Malawi" },
                    { 104, "Malaysia" },
                    { 105, "Maldives" },
                    { 106, "Mali" },
                    { 107, "Malta" },
                    { 108, "Marshall Islands" },
                    { 109, "Mauritania" },
                    { 110, "Mauritius" },
                    { 111, "Mexico" },
                    { 112, "Micronesia" },
                    { 113, "Moldova" },
                    { 114, "Monaco" },
                    { 115, "Mongolia" },
                    { 116, "Montenegro" },
                    { 117, "Morocco" },
                    { 118, "Mozambique" },
                    { 119, "Myanmar" },
                    { 120, "Namibia" },
                    { 145, "Rwanda" },
                    { 99, "Liechtenstein" },
                    { 146, "Saint Kitts and Nevis" },
                    { 148, "Saint Vincent and the Grenadines" },
                    { 174, "Thailand" },
                    { 175, "Timor-Leste" },
                    { 176, "Togo" },
                    { 177, "Tonga" },
                    { 178, "Trinidad and Tobago" },
                    { 179, "Tunisia" },
                    { 180, "Turkey" },
                    { 181, "Turkmenistan" },
                    { 182, "Tuvalu" },
                    { 173, "Tanzania" },
                    { 183, "Uganda" },
                    { 185, "United Arab Emirates" },
                    { 186, "United Kingdom" },
                    { 187, "United States of America" },
                    { 188, "Uruguay" },
                    { 189, "Uzbekistan" },
                    { 190, "Vanuatu" },
                    { 191, "Venezuela" },
                    { 192, "Vietnam" },
                    { 193, "Yemen" },
                    { 184, "Ukraine" },
                    { 172, "Tajikistan" },
                    { 171, "Syria" },
                    { 170, "Switzerland" },
                    { 149, "Samoa" },
                    { 150, "San Marino" },
                    { 151, "Sao Tome and Principe" },
                    { 152, "Saudi Arabia" },
                    { 153, "Senegal" },
                    { 154, "Serbia" },
                    { 155, "Seychelles" },
                    { 156, "Sierra Leone" },
                    { 157, "Singapore" },
                    { 158, "Slovakia" },
                    { 159, "Slovenia" },
                    { 160, "Solomon Islands" },
                    { 161, "Somalia" },
                    { 162, "South Africa" },
                    { 163, "South Korea" },
                    { 164, "South Sudan" },
                    { 165, "Spain" },
                    { 166, "Sri Lanka" },
                    { 167, "Sudan" },
                    { 168, "Suriname" },
                    { 169, "Sweden" },
                    { 147, "Saint Lucia" },
                    { 194, "Zambia" },
                    { 98, "Libya" },
                    { 96, "Lesotho" },
                    { 27, "Burkina Faso" },
                    { 28, "Burundi" },
                    { 29, "Côte d'Ivoire" },
                    { 30, "Cabo Verde" },
                    { 31, "Cambodia" },
                    { 32, "Cameroon" },
                    { 33, "Canada" },
                    { 34, "Central African Republic" },
                    { 35, "Chad" },
                    { 26, "Bulgaria" },
                    { 36, "Chile" },
                    { 38, "Colombia" },
                    { 39, "Comoros" },
                    { 40, "Congo" },
                    { 41, "Costa Rica" },
                    { 42, "Croatia" },
                    { 43, "Cuba" },
                    { 44, "Cyprus" },
                    { 45, "Czech Republic" },
                    { 46, "Democratic Republic of the Congo" },
                    { 37, "China" },
                    { 25, "Brunei" },
                    { 24, "Brazil" },
                    { 23, "Botswana" },
                    { 2, "Albania" },
                    { 3, "Algeria" },
                    { 4, "Andorra" },
                    { 5, "Angola" },
                    { 6, "Antigua and Barbuda" },
                    { 7, "Argentina" },
                    { 8, "Armenia" },
                    { 9, "Australia" },
                    { 10, "Austria" },
                    { 11, "Azerbaijan" },
                    { 12, "Bahamas" },
                    { 13, "Bahrain" },
                    { 14, "Bangladesh" },
                    { 15, "Barbados" },
                    { 16, "Belarus" },
                    { 17, "Belgium" },
                    { 18, "Belize" },
                    { 19, "Benin" },
                    { 20, "Bhutan" },
                    { 21, "Bolivia" },
                    { 22, "Bosnia and Herzegovina" },
                    { 47, "Denmark" },
                    { 97, "Liberia" },
                    { 48, "Djibouti" },
                    { 50, "Dominican Republic" },
                    { 76, "Hungary" },
                    { 77, "Iceland" },
                    { 78, "India" },
                    { 79, "Indonesia" },
                    { 80, "Iran" },
                    { 81, "Iraq" },
                    { 82, "Ireland" },
                    { 83, "Israel" },
                    { 84, "Italy" },
                    { 75, "Honduras" },
                    { 85, "Jamaica" },
                    { 87, "Jordan" },
                    { 88, "Kazakhstan" },
                    { 89, "Kenya" },
                    { 90, "Kiribati" },
                    { 91, "Kuwait" },
                    { 92, "Kyrgyzstan" },
                    { 93, "Laos" },
                    { 94, "Latvia" },
                    { 95, "Lebanon" },
                    { 86, "Japan" },
                    { 74, "Holy See" },
                    { 73, "Haiti" },
                    { 72, "Guyana" },
                    { 51, "Ecuador" },
                    { 52, "Egypt" },
                    { 53, "El Salvador" },
                    { 54, "Equatorial Guinea" },
                    { 55, "Eritrea" },
                    { 56, "Estonia" },
                    { 57, "Eswatini" },
                    { 58, "Ethiopia" },
                    { 59, "Fiji" },
                    { 60, "Finland" },
                    { 61, "France" },
                    { 62, "Gabon" },
                    { 63, "Gambia" },
                    { 64, "Georgia" },
                    { 65, "Germany" },
                    { 66, "Ghana" },
                    { 67, "Greece" },
                    { 68, "Grenada" },
                    { 69, "Guatemala" },
                    { 70, "Guinea" },
                    { 71, "Guinea-Bissau" },
                    { 49, "Dominica" },
                    { 195, "Zimbabwe" }
                });

            migrationBuilder.InsertData(
                table: "Settlements",
                columns: new[] { "SettlementId", "CountryId", "Name", "ZipCode" },
                values: new object[] { 1, 1, "Settlement1", "Zip1" });

            migrationBuilder.InsertData(
                table: "Settlements",
                columns: new[] { "SettlementId", "CountryId", "Name", "ZipCode" },
                values: new object[] { 2, 2, "Settlement2", "Zip2" });

            migrationBuilder.InsertData(
                table: "Settlements",
                columns: new[] { "SettlementId", "CountryId", "Name", "ZipCode" },
                values: new object[] { 3, 42, "Settlement3", "Zip3" });

            migrationBuilder.CreateIndex(
                name: "IX_Settlements_CountryId",
                table: "Settlements",
                column: "CountryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Settlements");

            migrationBuilder.DropTable(
                name: "Countries");
        }
    }
}
