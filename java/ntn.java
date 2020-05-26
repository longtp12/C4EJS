 
 static int[][] congmatran(int[][] A, int[][] B)
    {
        int[][] C = null;
        int n,m;
       
        if((A==null)||(B==null)) return null;
       
        if((A.length!=B.length)||(A[0].length!=B[0].length)) return null;
       
        n = A.length;
        m = A[0].length;
       
        C = new int[n][m];
       
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                C[i][j] = A[i][j] + B[i][j];
            }
        }
       
        return C;
    }
