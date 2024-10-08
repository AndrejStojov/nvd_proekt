package com.example.backend.service.impl;

import com.example.backend.domain.models.User;
import com.example.backend.domain.models.enumerations.Role;
import com.example.backend.domain.models.excepitons.InvalidUsernameOrPasswordException;
import com.example.backend.domain.models.excepitons.PasswordsDoNotMatchException;
import com.example.backend.domain.models.excepitons.UsernameAlreadyExistsException;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserDetailsService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("User not found"));
    }
}

//    @Override
//    public User register(String username, String password, String repeatPassword, String name, String surname, Role role) {
//        if (username == null || username.isEmpty()|| password==null || password.isEmpty())
//            throw new InvalidUsernameOrPasswordException();
//        if (!password.equals(repeatPassword))
//            throw new PasswordsDoNotMatchException();
//        if (this.userRepository.findByUsername(username).isPresent())
//            throw new UsernameAlreadyExistsException(username);
//        User user = new User(username, passwordEncoder.encode(password),name, surname, role);
//        return userRepository.save(user);
//    }

//    @Override
//    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
//        return userRepository.findByUsername(s).orElseThrow(()-> new UsernameNotFoundException(s));
//    }
//}
