

SELECT Idioma FROM Idiomas INNER JOIN
TraductoresQueHablan ON IdIdioma = Idiomas_IdIdioma INNER JOIN
dbo.Traductores ON idTraductores = Traductores_idTraductores WHERE Name = @Name