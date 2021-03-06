USE [master]
GO
/****** Object:  Database [SPA Traductores]    Script Date: 29/05/2018 12:28:58 ******/
CREATE DATABASE [SPA Traductores]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SPA Traductores', FILENAME = N'C:\Users\jpujals\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\SPA Traductores.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SPA Traductores_log', FILENAME = N'C:\Users\jpujals\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB\SPA Traductores.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [SPA Traductores] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SPA Traductores].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SPA Traductores] SET ANSI_NULL_DEFAULT ON 
GO
ALTER DATABASE [SPA Traductores] SET ANSI_NULLS ON 
GO
ALTER DATABASE [SPA Traductores] SET ANSI_PADDING ON 
GO
ALTER DATABASE [SPA Traductores] SET ANSI_WARNINGS ON 
GO
ALTER DATABASE [SPA Traductores] SET ARITHABORT ON 
GO
ALTER DATABASE [SPA Traductores] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SPA Traductores] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SPA Traductores] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SPA Traductores] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SPA Traductores] SET CURSOR_DEFAULT  LOCAL 
GO
ALTER DATABASE [SPA Traductores] SET CONCAT_NULL_YIELDS_NULL ON 
GO
ALTER DATABASE [SPA Traductores] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SPA Traductores] SET QUOTED_IDENTIFIER ON 
GO
ALTER DATABASE [SPA Traductores] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SPA Traductores] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SPA Traductores] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SPA Traductores] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SPA Traductores] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SPA Traductores] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SPA Traductores] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SPA Traductores] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SPA Traductores] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SPA Traductores] SET RECOVERY FULL 
GO
ALTER DATABASE [SPA Traductores] SET  MULTI_USER 
GO
ALTER DATABASE [SPA Traductores] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SPA Traductores] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SPA Traductores] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SPA Traductores] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SPA Traductores] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [SPA Traductores] SET QUERY_STORE = OFF
GO
USE [SPA Traductores]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [SPA Traductores]
GO
/****** Object:  Table [dbo].[Idiomas]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Idiomas](
	[Idioma] [varchar](45) NOT NULL,
	[IdIdioma] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IdIdioma] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Peticiones]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peticiones](
	[IdPeticion] [int] IDENTITY(1,1) NOT NULL,
	[IdIdioma] [int] NOT NULL,
	[IdServicio] [int] NOT NULL,
	[idTraductor] [int] NOT NULL,
	[NombreSolicitante] [nvarchar](50) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Telefono] [nchar](9) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdPeticion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Servicio]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Servicio](
	[Servicio] [varchar](45) NOT NULL,
	[IdServicio] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IdServicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Traductores]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Traductores](
	[idTraductores] [int] IDENTITY(1,1) NOT NULL,
	[Email] [varchar](90) NOT NULL,
	[Usuario] [varchar](45) NOT NULL,
	[Pass] [varchar](45) NOT NULL,
	[Name] [varchar](45) NULL,
	[LastName] [varchar](45) NULL,
	[CP] [nchar](5) NOT NULL,
	[Tlfn] [nchar](9) NULL,
PRIMARY KEY CLUSTERED 
(
	[idTraductores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TraductoresQueHablan]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraductoresQueHablan](
	[Idiomas_IdIdioma] [int] NOT NULL,
	[Traductores_idTraductores] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Idiomas_IdIdioma] ASC,
	[Traductores_idTraductores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TraductoresServicio]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraductoresServicio](
	[Traductores_idTraductores] [int] NOT NULL,
	[Servicio_IdServicio] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Traductores_idTraductores] ASC,
	[Servicio_IdServicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [fk_Idiomas_has_Traductores_Idiomas_idx]    Script Date: 29/05/2018 12:28:58 ******/
CREATE NONCLUSTERED INDEX [fk_Idiomas_has_Traductores_Idiomas_idx] ON [dbo].[TraductoresQueHablan]
(
	[Idiomas_IdIdioma] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fk_Idiomas_has_Traductores_Traductores1_idx]    Script Date: 29/05/2018 12:28:58 ******/
CREATE NONCLUSTERED INDEX [fk_Idiomas_has_Traductores_Traductores1_idx] ON [dbo].[TraductoresQueHablan]
(
	[Traductores_idTraductores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fk_Traductores_has_Servicio_IdServicio1_idx]    Script Date: 29/05/2018 12:28:58 ******/
CREATE NONCLUSTERED INDEX [fk_Traductores_has_Servicio_IdServicio1_idx] ON [dbo].[TraductoresServicio]
(
	[Servicio_IdServicio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fk_Traductores_has_Servicio_Traductores1_idx]    Script Date: 29/05/2018 12:28:58 ******/
CREATE NONCLUSTERED INDEX [fk_Traductores_has_Servicio_Traductores1_idx] ON [dbo].[TraductoresServicio]
(
	[Traductores_idTraductores] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Peticiones]  WITH CHECK ADD FOREIGN KEY([IdIdioma])
REFERENCES [dbo].[Idiomas] ([IdIdioma])
GO
ALTER TABLE [dbo].[Peticiones]  WITH CHECK ADD FOREIGN KEY([IdServicio])
REFERENCES [dbo].[Servicio] ([IdServicio])
GO
ALTER TABLE [dbo].[Peticiones]  WITH CHECK ADD FOREIGN KEY([idTraductor])
REFERENCES [dbo].[Traductores] ([idTraductores])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TraductoresQueHablan]  WITH CHECK ADD  CONSTRAINT [fk_Idiomas_has_Traductores_Idiomas] FOREIGN KEY([Idiomas_IdIdioma])
REFERENCES [dbo].[Idiomas] ([IdIdioma])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TraductoresQueHablan] CHECK CONSTRAINT [fk_Idiomas_has_Traductores_Idiomas]
GO
ALTER TABLE [dbo].[TraductoresQueHablan]  WITH NOCHECK ADD  CONSTRAINT [fk_Idiomas_has_Traductores_Traductores] FOREIGN KEY([Traductores_idTraductores])
REFERENCES [dbo].[Traductores] ([idTraductores])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TraductoresQueHablan] CHECK CONSTRAINT [fk_Idiomas_has_Traductores_Traductores]
GO
ALTER TABLE [dbo].[TraductoresServicio]  WITH CHECK ADD  CONSTRAINT [fk_Traductores_has_Servicio_IdServicio1] FOREIGN KEY([Servicio_IdServicio])
REFERENCES [dbo].[Servicio] ([IdServicio])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TraductoresServicio] CHECK CONSTRAINT [fk_Traductores_has_Servicio_IdServicio1]
GO
ALTER TABLE [dbo].[TraductoresServicio]  WITH NOCHECK ADD  CONSTRAINT [fk_Traductores_has_Servicio_idTraductores] FOREIGN KEY([Traductores_idTraductores])
REFERENCES [dbo].[Traductores] ([idTraductores])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[TraductoresServicio] CHECK CONSTRAINT [fk_Traductores_has_Servicio_idTraductores]
GO
ALTER TABLE [dbo].[Peticiones]  WITH CHECK ADD  CONSTRAINT [CK_TELpet] CHECK  (([Telefono] like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))
GO
ALTER TABLE [dbo].[Peticiones] CHECK CONSTRAINT [CK_TELpet]
GO
ALTER TABLE [dbo].[Traductores]  WITH CHECK ADD  CONSTRAINT [ck_CP] CHECK  (([CP] like '[0-9][0-9][0-9][0-9][0-9]'))
GO
ALTER TABLE [dbo].[Traductores] CHECK CONSTRAINT [ck_CP]
GO
ALTER TABLE [dbo].[Traductores]  WITH CHECK ADD  CONSTRAINT [ck_Tlfn] CHECK  (([Tlfn] like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'))
GO
ALTER TABLE [dbo].[Traductores] CHECK CONSTRAINT [ck_Tlfn]
GO
/****** Object:  StoredProcedure [dbo].[addIdiomaToTrad]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[addIdiomaToTrad] (
	@IdIdioma INT,
	@IdTraductor INT
) 
as
Begin
	Insert into dbo.TraductoresQueHablan (Idiomas_IdIdioma, Traductores_idTraductores)
	Values (@IdIdioma, @IdTraductor)
End
GO
/****** Object:  StoredProcedure [dbo].[AddLanguage]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[AddLanguage]         
(     
	@idioma VARCHAR(45)
	
)        
as         
Begin         
    Insert into dbo.Idiomas (Idioma)         
    Values (@idioma)         
End
GO
/****** Object:  StoredProcedure [dbo].[AddRequest]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddRequest] (
	
	@IdIdioma INT,
	@IdServicio INT,
	@IdTraductor INT,
    @Name VARCHAR(45),
	@Description NVARCHAR(1000),
	@Email VARCHAR(90),
	@Tlfn NCHAR(9)

)
as
BEGIN
	INSERT INTO dbo.Peticiones VALUES ( @IdIdioma, @IdServicio, @IdTraductor, @Name, @Description, @Email, @Tlfn )
End
GO
/****** Object:  StoredProcedure [dbo].[AddService]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[AddService]         
(     
	@Service VARCHAR(45)
	
)        
as         
Begin         
    Insert into dbo.Servicio(Servicio)         
    Values (@Service)         
End
GO
/****** Object:  StoredProcedure [dbo].[addServToTrad]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[addServToTrad] (
	@IdServicio INT,
	@IdTraductor INT
) 
as
Begin
	Insert into dbo.TraductoresServicio (Servicio_IdServicio, Traductores_idTraductores)
	Values (@IdServicio, @IdTraductor)
End
GO
/****** Object:  StoredProcedure [dbo].[AddTraductor]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[AddTraductor]         
(     
	@Email VARCHAR(90),
	@Usuario VARCHAR(45),
	@Pass VARCHAR(45),
    @Name VARCHAR(45),
	@LastName VARCHAR(45),
	@CP NCHAR(5),
	@Tlfn NCHAR(9)
)        
as         
Begin         
    Insert into dbo.Traductores (Email, Usuario, Pass, Name, LastName, CP, Tlfn)         
    Values (@Email, @Usuario, @Pass, @Name, @LastName, @CP,@Tlfn)         
End
GO
/****** Object:  StoredProcedure [dbo].[altaUser]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[altaUser] 
(
	@Usuario VARCHAR(45),
	@Pass VARCHAR(45) 
)
as
Begin
SELECT idTraductores FROM dbo.Traductores WHERE Usuario = @Usuario AND Pass = @Pass
END
GO
/****** Object:  StoredProcedure [dbo].[DeleteLanguage]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[DeleteLanguage]
(        
   @Language VARCHAR(45)       
)        
as         
begin        
   Delete from dbo.Idiomas where Idioma = @Language  
End
GO
/****** Object:  StoredProcedure [dbo].[DeleteService]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[DeleteService]
(        
   @Service VARCHAR(45)       
)        
as         
begin        
   Delete from dbo.Servicio where Servicio = @Service  
End
GO
/****** Object:  StoredProcedure [dbo].[DeleteTraductor]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[DeleteTraductor]       
(        
   @idTraductores int        
)        
as         
begin        
   Delete from dbo.Traductores where idTraductores = @idTraductores      
End
GO
/****** Object:  StoredProcedure [dbo].[GetAllIdiomas]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create procedure [dbo].[GetAllIdiomas]      
as      
Begin      
    select *      
    from dbo.Idiomas  
    
End
GO
/****** Object:  StoredProcedure [dbo].[GetAllServicios]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create procedure [dbo].[GetAllServicios]      
as      
Begin      
    select *      
    from dbo.Servicio
    
End
GO
/****** Object:  StoredProcedure [dbo].[GetAllTraductores]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create procedure [dbo].[GetAllTraductores]      
as      
Begin      
    select *      
    from dbo.Traductores   
    order by idTraductores      
End
GO
/****** Object:  StoredProcedure [dbo].[GetIds]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetIds] (
	@Email NVARCHAR(90),
	@Name NVARCHAR(45),
	@Idioma NVARCHAR(45),
	@Servicio NVARCHAR(45)
)
as
Begin

SELECT idTraductores FROM Traductores WHERE Traductores.Email = @Email AND Traductores.Name = @Name UNION
SELECT idIdioma FROM Idiomas WHERE Idioma = @Idioma UNION
SELECT idServicio FROM Servicio WHERE Servicio = @Servicio 
End
GO
/****** Object:  StoredProcedure [dbo].[GetTraductoresByCp]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[GetTraductoresByCp]
(
	@CP NCHAR(5)
)
as      
Begin      
    select *      
    from dbo.Traductores WHERE CP = @CP
    order by CP     
End
GO
/****** Object:  StoredProcedure [dbo].[GetTraductorId]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create procedure [dbo].[GetTraductorId]
(
	@Usuario VARCHAR(45)
)
as
Begin
	Select IdTraductores FROM Traductores WHERE Usuario = @Usuario
End
GO
/****** Object:  StoredProcedure [dbo].[searchTraductors]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[searchTraductors] (
	
	@CP NCHAR(5),
	@Idioma VARCHAR(45),
	@Servicio VARCHAR(45)

)
AS
BEGIN
SELECT Email, Name, LastName, CP, Tlfn, Idioma, Servicio, idTraductores, IdIdioma, IdServicio  FROM Traductores  INNER JOIN
TraductoresQueHablan ON Traductores_idTraductores = idTraductores		   INNER JOIN
Idiomas ON Idiomas_IdIdioma = idIdioma									   INNER JOIN
TraductoresServicio AS TS ON TS.Traductores_idTraductores = idTraductores  INNER JOIN
Servicio ON IdServicio = Servicio_IdServicio
WHERE  (CP = @CP AND Idioma = @Idioma AND Servicio = @Servicio)
END
GO
/****** Object:  StoredProcedure [dbo].[UpdateTraductor]    Script Date: 29/05/2018 12:28:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[UpdateTraductor]         
(   
	@idTraductores INT,
	@Email VARCHAR(90),
	@Usuario VARCHAR(45),
	@Pass VARCHAR(45),
    @Name VARCHAR(45),
	@LastName VARCHAR(45),
	@CP NCHAR(5),
	@Tlfn NCHAR(9)
)        
as         
Begin         
   Update dbo.Traductores 
   set Email = @Email ,
   Usuario= @Usuario,
   Pass=  @Pass,
   Name= @Name,
   LastName= @LastName,
   CP=  @CP,
   Tlfn= @Tlfn         
    WHERE idTraductores = @idTraductores       
End
GO
USE [master]
GO
ALTER DATABASE [SPA Traductores] SET  READ_WRITE 
GO
