

SELECT Email, Name, LastName, CP, Tlfn, Idioma, Servicio FROM Traductores  INNER JOIN
TraductoresQueHablan ON Traductores_idTraductores = idTraductores		   INNER JOIN
Idiomas ON Idiomas_IdIdioma = idIdioma									   INNER JOIN
TraductoresServicio AS TS ON TS.Traductores_idTraductores = idTraductores  INNER JOIN
Servicio ON IdServicio = Servicio_IdServicio
WHERE  (CP = '07001' AND Idioma = 'English' AND Servicio = 'Health')