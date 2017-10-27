CREATE TABLE [dbo].[Book](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nchar](100) NULL,
	[Author] [nchar](100) NULL,
	[Genre] [nchar](100) NULL,
	[Read] [bit] NULL CONSTRAINT [DF_Book_Read]  DEFAULT ((0))
)
GO
