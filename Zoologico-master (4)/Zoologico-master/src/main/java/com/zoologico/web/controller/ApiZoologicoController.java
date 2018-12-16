package com.zoologico.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zoologico.web.DAO.AnimalDAO;
import com.zoologico.web.DAO.SectorDAO;
import com.zoologico.web.DAO.TipoDAO;
import com.zoologico.web.DAO.UsuarioDAO;
import com.zoologico.web.entity.Animal;
import com.zoologico.web.entity.Sector;
import com.zoologico.web.entity.Tipo;
import com.zoologico.web.entity.Usuario;





@RestController
@CrossOrigin
@RequestMapping("/api")
public class ApiZoologicoController {

	 @Autowired
	 UsuarioDAO uDAO;
	 
	 @Autowired
	 TipoDAO tDAO;
	 
/*      Usuario      */
	 
		@GetMapping("/usuario")
		public Iterable<Usuario> listarUsuario() {

			return uDAO.crud().findAll();
		}
		
		
		 
	@GetMapping("/usuario/{codigo}")
	public ResponseEntity<Usuario> buscarUsuario(@PathVariable("codigo") int codigo) {
		
		Usuario usuario = null;
		
		try {
		usuario = uDAO.crud().findById(codigo).get();
		return new ResponseEntity <Usuario>(usuario, HttpStatus.OK);
		}catch (Exception ex)
		{
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
	}
		
	
		@PostMapping("/usuario")
		public ResponseEntity<Usuario> guardarUsuario(
				@RequestBody Usuario usuario) {
			
			try {
				
				Usuario usuarioCreado
						= uDAO.crud().save(usuario);
				
				return new ResponseEntity<Usuario>(usuarioCreado, HttpStatus.ACCEPTED);
			} catch(Exception ex) {
				
				return new ResponseEntity(HttpStatus.BAD_REQUEST);
			}
			
		}
		
		
		@DeleteMapping("/usuario/{codigo}")
		public ResponseEntity<Map<String, String>> eliminarUsuario(@PathVariable("codigo") int codigo) {
			
			try {
				uDAO.crud().deleteById(codigo);
				HashMap<String, String> mensaje = new HashMap<>();
				mensaje.put("mensaje", "Usuario Eliminado correctamente");
				return new ResponseEntity<Map<String,String>>(mensaje, HttpStatus.OK);
				
			} catch(Exception ex) {
				
				return new ResponseEntity(HttpStatus.NOT_FOUND);
				
			}
			

		}
		
		@PutMapping("/usuario/{codigo}")
		public ResponseEntity<Usuario> modificarUsuario(
				@RequestBody Usuario usuario,
				@PathVariable("codigo") int codigo) {
			
			Usuario usuarioBuscado = null;
			
			try {
				usuarioBuscado = uDAO.crud().findById(codigo).get();
				//si lo encuentra le pasamos los nuevos datos
				usuarioBuscado.setPass(usuario.getPass());
				usuarioBuscado.setUser(usuario.getUser());
				
			} catch(Exception ex) {
				
				return new ResponseEntity(HttpStatus.NOT_FOUND);
				
			}
			
			try {
				
				Usuario usuarioModificado
						= uDAO.crud().save(usuarioBuscado);
				return new ResponseEntity<Usuario>(usuarioModificado,
						HttpStatus.OK);
				
			} catch (Exception e) {
				
				return new ResponseEntity(HttpStatus.BAD_REQUEST);
				
			}		
		}
			
		
		
/*      Tipo          */
		
		@GetMapping("/tipo")
		public Iterable<Tipo> listarTipo() {

			return tDAO.crud().findAll();
		}
		
		@PostMapping("/tipo")
		public ResponseEntity<Tipo> guardarTipo(
				@RequestBody Tipo tipo) {
			
			try {
				
				Tipo tipoCreado
						= tDAO.crud().save(tipo);
				
				return new ResponseEntity<Tipo>(tipoCreado, HttpStatus.ACCEPTED);
			} catch(Exception ex) {
				
				return new ResponseEntity(HttpStatus.BAD_REQUEST);
			}
			
		}
		
		@DeleteMapping("/tipo/{codigo}")
		public ResponseEntity<Map<String, String>> eliminarTipo(@PathVariable("codigo") int codigo) {
			
			try {
				tDAO.crud().deleteById(codigo);
				HashMap<String, String> mensaje = new HashMap<>();
				mensaje.put("mensaje", "Tipo Eliminado correctamente");
				return new ResponseEntity<Map<String,String>>(mensaje, HttpStatus.OK);
				
			} catch(Exception ex) {
				
				return new ResponseEntity(HttpStatus.NOT_FOUND);
				
			}
			

		}
		
		
		@PutMapping("/tipo/{codigo}")
		public ResponseEntity<Tipo> modificarTipo(
				@RequestBody Tipo tipo,
				@PathVariable("codigo") int codigo) {
			
			Tipo tipoBuscado = null;
			
			try {
				tipoBuscado = tDAO.crud().findById(codigo).get();
				//si lo encuentra le pasamos los nuevos datos
				tipoBuscado.setDescripcion(tipo.getDescripcion());
				tipoBuscado.setNombre(tipo.getNombre());
				
			} catch(Exception ex) {
				
				return new ResponseEntity(HttpStatus.NOT_FOUND);
				
			}
			
			try {
				
				Tipo tipoModificado
						= tDAO.crud().save(tipoBuscado);
				return new ResponseEntity<Tipo>(tipoModificado,
						HttpStatus.OK);
				
			} catch (Exception e) {
				
				return new ResponseEntity(HttpStatus.BAD_REQUEST);
				
			}		
		}
				
		

}
