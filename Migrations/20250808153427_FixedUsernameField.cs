using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SampleReactAndDotNet.Migrations
{
    /// <inheritdoc />
    public partial class FixedUsernameField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "USername",
                schema: "dbo",
                table: "User",
                newName: "Username");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Username",
                schema: "dbo",
                table: "User",
                newName: "USername");
        }
    }
}
