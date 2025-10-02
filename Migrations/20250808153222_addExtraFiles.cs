using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SampleReactAndDotNet.Migrations
{
    /// <inheritdoc />
    public partial class addExtraFiles : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                schema: "dbo",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                schema: "dbo",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "USername",
                schema: "dbo",
                table: "User",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Password",
                schema: "dbo",
                table: "User");

            migrationBuilder.DropColumn(
                name: "USername",
                schema: "dbo",
                table: "User");
        }
    }
}
