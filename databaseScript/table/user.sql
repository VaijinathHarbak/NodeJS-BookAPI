CREATE TABLE [dbo].[User](
	[Id] [bigint] primary key IDENTITY(1,1) NOT NULL,
	[UserName] [nchar](20) NULL,
	[Password] [nchar](20) NULL,
)
GO
