chai = require 'chai'
expect = chai.expect
Main = require '../src/main'

describe 'Knows what...', ->
	main = null
	before ->
	main = new Main

	it 'can add numbers', ->
		expect(main.addition(1,2)).to.equal 3

	it 'can subtract numbers', ->
		expect(main.subtraction(2,1)).to.equal 1