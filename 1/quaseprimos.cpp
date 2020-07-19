#include <iostream>
#include <math.h>
using namespace std;

bool primo (int a) {
	int count = 0;
	for (int i = 2; i <= (a/2); i++) {
		if ((a % i) == 0) {
			count++;
			break;
		}
	}
	if (count == 0) return true;
	else return false;
}



int main() {
	int n, parte_inteira;
	double quadrado;
	
	cin >> n;
	
	quadrado = sqrt(n);
	parte_inteira = quadrado;
	
	if ((quadrado == parte_inteira) && (n != 1)) {
		if (primo(parte_inteira)) cout << "S\n";
		else cout << "N\n";
	} else {
		cout << "N\n";
	}
		
	return 0;
}