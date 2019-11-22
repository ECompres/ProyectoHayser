using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace webAPI.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Student",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: false),
                    SecondName = table.Column<string>(nullable: false),
                    FirstLastName = table.Column<string>(nullable: false),
                    SecondLastName = table.Column<string>(nullable: false),
                    BirthDate = table.Column<string>(nullable: false),
                    BirthPlace = table.Column<string>(nullable: false),
                    Genre = table.Column<string>(nullable: false),
                    CivilStatus = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Cedula = table.Column<string>(nullable: false),
                    Country = table.Column<string>(nullable: false),
                    CellphoneNumber = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Student", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Student");
        }
    }
}
