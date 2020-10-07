// import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy };
import {Component, ElementRef, ViewChild, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth';
import * as d3 from 'd3';
import {sample} from 'rxjs/operators';
// import {HttpClient} from '@angular/common/http';
// import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-search-food',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
}
